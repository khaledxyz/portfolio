import Image from "next/image";

export function Background() {
  return (
    <div className="relative h-screen">
      {/* Background image using next/image */}
      <div className="absolute inset-0 z-0">
        <Image
          alt=""
          className="object-cover object-center"
          fill
          src="/bg.jpg"
        />
      </div>
    </div>
  );
}
