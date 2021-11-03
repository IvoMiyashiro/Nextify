

export const HeroCardChildren = ({ icon: Icon, title, text }) => {
   return (
      <>
         <div className="flex gap-2 md:width">
            <section className="mt-2">
               <Icon className="w-7 h-7 md:w-9 md-9 text-purple-600" />
            </section>
            <section>
               <h3 className="font-bold text-md">{title}</h3>
               <p className="flex gap-1 items-center mt-px text-gray-500 text-sm">
                  {text}
               </p>
            </section>
         </div>
         <style jsx>{`
            .width {
               width: 150px;
            }
         
         `}
         </style>
      </>
   );
};
