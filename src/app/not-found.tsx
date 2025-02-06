import Image from "next/image";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-56">
      <Image src="/assets/Detective-check-footprint 1.png" alt="Not Found" width={300} height={300} />
      <p className="text-lg font-semibold mt-4">Empty...</p>
      
    </div>
  );
}
