"use client";

import * as React from "react";
import Image from "next/image";

export type StreamImage = {
  src: string;
  label: string;
};

type CorridorPath = {
  perspective: number;
  cardWidth: number;
  cardHeight: number;
  cardRadius: number;
  birthHeight: number;
  exitHeight: number;
  railBirth: number;
  railExit: number;
  fan: number;
  turnBirth: number;
  turnExit: number;
  stops: number;
};

const corridor: CorridorPath = {
  perspective: 30,
  cardWidth: 14,
  cardHeight: 25,
  cardRadius: 0.8,
  birthHeight: 2.6,
  exitHeight: 46,
  railBirth: -11,
  railExit: 44,
  fan: 3.3,
  turnBirth: 6,
  turnExit: 28,
  stops: 24,
};

function createKeyframes(direction: 1 | -1, name: string) {
  const steps: string[] = [];

  for (let step = 0; step <= corridor.stops; step += 1) {
    const progress = step / corridor.stops;
    const scale =
      (corridor.birthHeight / corridor.cardHeight) *
      Math.pow(corridor.exitHeight / corridor.birthHeight, progress);
    const depth = corridor.perspective * (1 - 1 / scale);
    const rail =
      corridor.railExit -
      (corridor.railExit - corridor.railBirth) *
        Math.pow(1 - progress, corridor.fan);
    const turn =
      corridor.turnBirth +
      (corridor.turnExit - corridor.turnBirth) * progress;

    steps.push(
      `${(progress * 100).toFixed(2)}%{transform:translate3d(${(
        direction * rail
      ).toFixed(2)}cqw,0,${depth.toFixed(2)}cqw) rotateY(${(
        -direction * turn
      ).toFixed(2)}deg)}`,
    );
  }

  return `@keyframes ${name}{${steps.join("")}}`;
}

type ImageStreamProps = {
  images: StreamImage[];
  cards?: number;
  speed?: number;
  axis?: number;
  children?: React.ReactNode;
  className?: string;
};

export function ImageStream({
  images,
  cards = 9,
  speed = 19,
  axis = 55,
  children,
  className = "",
}: ImageStreamProps) {
  const streamRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const stream = streamRef.current;
    if (!stream) return;
    let inView = false;
    const updateAnimation = () => {
      stream.dataset.animating = String(inView && !document.hidden);
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      updateAnimation();
    });
    observer.observe(stream);
    document.addEventListener("visibilitychange", updateAnimation);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateAnimation);
    };
  }, []);
  const id = React.useId().replace(/[^a-zA-Z0-9]/g, "");
  const rightAnimation = `k7-stream-right-${id}`;
  const leftAnimation = `k7-stream-left-${id}`;
  const cardClass = `k7-stream-card-${id}`;
  const styles = React.useMemo(
    () =>
      `${createKeyframes(1, rightAnimation)}${createKeyframes(
        -1,
        leftAnimation,
      )}.image-stream:not([data-animating="true"]) .${cardClass}{animation-play-state:paused!important;will-change:auto}@media(prefers-reduced-motion:reduce){.${cardClass}{animation-play-state:paused!important;will-change:auto}}`,
    [cardClass, leftAnimation, rightAnimation],
  );

  if (images.length === 0) return null;

  return (
    <div ref={streamRef} className={`image-stream ${className}`.trim()}>
      <style>{styles}</style>
      <div
        className="image-stream-perspective"
        aria-hidden="true"
        style={{
          perspective: `${corridor.perspective}cqw`,
          perspectiveOrigin: `50% ${axis}%`,
        }}
      >
        <div className="image-stream-world">
          {[rightAnimation, leftAnimation].map((animationName, railIndex) =>
            Array.from({ length: cards }, (_, index) => {
              const image =
                images[
                  (index + railIndex * Math.ceil(images.length / 2)) %
                    images.length
                ];

              return (
                <div
                  className={`image-stream-card ${cardClass}`}
                  key={`${animationName}-${index}`}
                  style={{
                    left: "50%",
                    top: `${axis}%`,
                    width: `${corridor.cardWidth}cqw`,
                    height: `${corridor.cardHeight}cqw`,
                    marginLeft: `${-corridor.cardWidth / 2}cqw`,
                    marginTop: `${-corridor.cardHeight / 2}cqw`,
                    borderRadius: `${corridor.cardRadius}cqw`,
                    animation: `${animationName} ${speed}s linear infinite`,
                    animationDelay: `${-(index * speed) / cards}s`,
                  }}
                >
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="(max-width: 620px) 26vw, 14vw"
                    draggable={false}
                  />
                  <span>{image.label}</span>
                </div>
              );
            }),
          )}
        </div>
      </div>
      <div className="image-stream-vignette" aria-hidden="true" />
      {children}
    </div>
  );
}
