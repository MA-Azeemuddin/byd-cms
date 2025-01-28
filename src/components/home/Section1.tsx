export default function Section1() {
  return (
    <div className="grid grid-cols-1 gap-y-4 md:grid-cols-3 ">
      <div className="grid col-span-1 md:col-span-2 border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-8 w-full">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
          temporibus rem cum, mollitia tempora voluptate. Voluptas, soluta
          iusto. Deserunt ea dolore inventore molestias voluptate minus
          similique nemo, pariatur nesciunt repudiandae.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
          temporibus rem cum, mollitia tempora voluptate. Voluptas, soluta
          iusto. Deserunt ea dolore inventore molestias voluptate minus
          similique nemo, pariatur nesciunt repudiandae.
        </p>
      </div>
      <div className="grid col-span-1 border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full p-8">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
          temporibus rem cum, mollitia tempora voluptate. Voluptas, soluta
          iusto. Deserunt ea dolore inventore molestias voluptate minus
          similique nemo, pariatur nesciunt repudiandae.
        </p>
      </div>
    </div>
  );
}
