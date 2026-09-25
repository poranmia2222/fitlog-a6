import ExerciseLibrary from "@/component/homepage/ExerciseLibrary";
import Banner from "@/component/homepage/Banner";

export default function Home() {
  return (
    <div className="">
      <main className="min-h-screen">
        <Banner></Banner>
        <ExerciseLibrary></ExerciseLibrary>
      </main>
    </div>
  );
}
