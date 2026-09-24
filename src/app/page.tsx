import ExerciseLibrary from "@/component/ExerciseLibrary";
import Banner from "@/component/homepage/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Banner></Banner>
        <ExerciseLibrary></ExerciseLibrary>
      </main>
    </div>
  );
}
