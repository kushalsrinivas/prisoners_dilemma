import Image from "next/image";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <main className={""}>
      <div className="p-5 flex justify-center flex-col">
        <div className="pt-40 text-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title"> Prisoners Dilemma</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
