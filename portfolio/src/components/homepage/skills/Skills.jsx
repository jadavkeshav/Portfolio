// import Marquee from "react-fast-marquee";
// import { urlFor } from "../../../client";

// function Skills({skillsData}) {
//   console.log(skillsData)
//   return (
//     <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
//       <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

//       <div className="flex justify-center -translate-y-[1px]">
//         <div className="w-3/4">
//           <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
//         </div>
//       </div>

//       <div className="flex justify-center my-5 lg:py-8">
//         <div className="flex  items-center">
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//           <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
//             Skills
//           </span>
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//         </div>
//       </div>

//       <div className="w-full my-12">
//         <Marquee
//           gradient={false}
//           speed={80}
//           pauseOnHover={true}
//           pauseOnClick={true}
//           delay={0}
//           play={true}
//           direction="left"
//         >
//           {skillsData && skillsData.map((skill, id) => (
//             <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
//               key={id}>
//               <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
//                 <div className="flex -translate-y-[1px] justify-center">
//                   <div className="w-3/4">
//                     <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-center justify-center gap-3 p-6">
//                   <div className="h-8 sm:h-10">
//                     <img
//                       src={urlFor(skill.skillImage?.asset?._ref)}
//                       alt={skill}
//                       width={40}
//                       height={40}
//                       className="h-full w-auto rounded-lg"
//                     />
//                   </div>
//                   <p className="text-white text-sm sm:text-lg">
//                     {skill.skill === "other" ? skill.customSkill : skill.skill}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Marquee>
//       </div>
//     </div>
//   );
// };

// export default Skills;
import AnimationLottie from "../../helper/animation-lottie";
import lottieFile from "../../../assets/lottie/lotti3.json";
import section from "../../../assets/section.svg";
import { urlFor } from "../../../client";

function Skills({ skillsData }) {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <img
        src={section || "/placeholder.svg"}
        alt="Section Background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full animate-pulse" />
        </div>
      </div>

       <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills 
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-1">
          {/* Lottie Animation on Left */}
          <div className="flex justify-center items-center order-1 lg:order-1">
            <div className="relative w-4/5 md:w-3/4">
              <div className="relative z-10 p-4 rounded-2xl transition-all duration-500">
                <AnimationLottie animationPath={lottieFile} />
              </div>
            </div>
          </div>

          {/* Skills on Right */}
          <div className="relative z-10 order-2 lg:order-2">
            <div className="relative sm:p-10 rounded-2xl bg-transparent border-none shadow-none">
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-8 p-4">
                {skillsData?.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full border border-[#25213b] bg-[#1a1443]">
                      <img
                        src={urlFor(skill.skillImage?.asset?._ref) || "/placeholder.svg"}
                        alt={skill.skill}
                        className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded-full"
                      />
                    </div>
                    <p className="text-white text-xs sm:text-sm font-medium text-center mt-2">
                      {skill.skill === "other" ? skill.customSkill : skill.skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
