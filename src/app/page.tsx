import { Button } from "@/components/ui/button"
import { FiDownload} from "react-icons/fi"

//components
import Photo from "@/components/Photo"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Telecommunication Engineering Student</span>
            <h1 className="h1 mb-4">
              Hello I`m <br /> <span className="text-accent"> Naisya Aghis.N</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            Telecommunication Engineering student who has an enthusiasm for learning in various software applications and programming languages, with an interest in cybersecurity and networking.
            </p>
          </div>

          {/* photo */}
          <Photo />
        </div>
      </div>
    </section>
  )
}

export default Home