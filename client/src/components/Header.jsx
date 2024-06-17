import {
	Button,
	Navbar,
	NavbarCollapse,
	NavbarLink,
	NavbarToggle,
	TextInput,
	Tooltip,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch, AiOutlineLogin } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
const Header = () => {
	const path = useLocation().pathname;
	return (
		<div className="">
			<Navbar className="border-b-2 ">
				{/* link */}
				<Link
					to={"/"}
					className="self-center dark:text-white bg-slate-950 md:px-2 md:py-1.5 px-2 py-1  shadow-lg "
				>
					<span className="font-bold md:text-2xl text-red-700  ">
						GeoPolitico
					</span>
					<span className=" px-2 text-blue-600 font-bold md:text-2xl">
						Blog
					</span>
				</Link>

				{/* search input */}
				<form>
					<TextInput
						type="text"
						placeholder="Search . . ."
						rightIcon={AiOutlineSearch}
						size={20}
						className="hidden  md:inline "
					/>
				</form>

				{/* search button */}

				<Button
					pill
					className="w-10 h-10 flex items-center justify-center md:hidden   "
					color={"gray"}
				>
					<AiOutlineSearch className="size-4" />
				</Button>

				{/* dark mode & signin button*/}
				<div className="flex gap-5 md:order-3">
					<Button pill color={"gray"} className="hidden sm:inline h-10 w-12  ">
						<FaMoon className="size-5" />
					</Button>

					{/* signin button for small screens */}

					<Link to={"/signin"}>
						<Tooltip content="Signin" placement="bottom">
							<Button
								gradientDuoTone={"purpleToBlue"}
								outline
								className="sm:hidden inline"
							>
								<AiOutlineLogin />
							</Button>
						</Tooltip>
					</Link>
					<NavbarToggle />
				</div>

				{/* signin button md to lg screens */}
				<div>
					<Link to={"/signin"}>
						<Button
							gradientDuoTone={"purpleToBlue"}
							outline
							className="sm:inline hidden"
						>
							Signin
						</Button>
					</Link>
				</div>

				{/* hamberger or bredcrumb button  for small screens  */}

				<NavbarCollapse>
					<NavbarLink active={path == "/"} as={"div"}>
						<Link to={"/"}>Home</Link>
					</NavbarLink>
					<NavbarLink active={path == "/about"} as={"div"}>
						<Link to={"/about"}>About</Link>
					</NavbarLink>

					<NavbarLink active={path == "/projects"} as={"div"}>
						<Link to={"/projects"}>Projects </Link>
					</NavbarLink>
				</NavbarCollapse>
			</Navbar>
		</div>
	);
};

export default Header;
