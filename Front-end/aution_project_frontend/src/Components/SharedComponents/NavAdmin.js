import Logo from "../../Assets/Logo.png";
import ItemNavBar from "../AdminComponents/ItemNavBar";
function NavBarAdmin() {
  const items = [
    {
      content: "Reports",
      numberItem: 0,
      href: "/Admin"
    },
    {
      content: "Staff",
      numberItem: 1,
      href: "/"
    },
    {
      content: "User",
      numberItem: 1,
      href: "/"
    },
    {
      content: "Suplier",
      numberItem: 1,
      href: "/"
    },
    {
      content: "News",
      numberItem: 2,
      href: "/Admin/News"
    },
    {
      content: "Events",
      numberItem: 2,
      href: "/"
    },
    {
      content: "Taxs",
      numberItem: 2,
      href: "/"
    },
    {
      content: "Assets type",
      numberItem: 3,
      href: "/"
    },
    {
      content: "Assets",
      numberItem: 3,
      href: "/"
    },
    {
      content: "Ware Home",
      numberItem: 3,
      href: "/"
    },
    {
      content: "Aution",
      numberItem: 4,
      href: "/"
    },
    {
      content: "Requests",
      numberItem: 4,
      href: "/"
    },
    {
      content: "Bills",
      numberItem: 4,
      href: "/"
    },
  ];
  return (
    <div id="menu" class="bg-[#ff4949] min-h-[1500px] col-span-2 rounded-lg p-4 flex flex-col">
      <div className="px-[40px] flex flex-col justify-center items-center">
        <img src={Logo} width={65} height={55} alt="Logo" />
        <span className=" text-[16px] text-white">Auction Table</span>
      </div>
      <div id="menu" class="flex flex-col space-y-2 my-5">
        {items.map((item, index) => {
          return (
            <ItemNavBar
              key={index}
              content={item.content}
              numberIcon={item.numberItem}
              href={item.href}
            ></ItemNavBar>
          );
        })}
      </div>
      <div className="mt-auto">
        <div className="flex justify-start">
          <span className="text-white font-semibold text-[16px]">Support</span>
        </div>
        <ItemNavBar content={"Get Started"} numberIcon={4} />
        <ItemNavBar content={"Setting"} numberIcon={5} />
        <hr class="my-2 border-white" />
        <a
          href="/"
          class="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2"
        >
          <div>
            <img
              class="rounded-full w-10 h-10 relative object-cover"
              src="https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=1800&t=st=1669749937~exp=1669750537~hmac=4c5ab249387d44d91df18065e1e33956daab805bee4638c7fdbf83c73d62f125"
              alt=""
            />
          </div>
          <div>
            <p class="font-medium text-white group-hover:text-indigo-400 leading-4">
              Admin
            </p>
            <span class="text-xs text-white">Pantazi LLC</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default NavBarAdmin;
