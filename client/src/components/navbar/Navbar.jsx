import "./navbar.scss";

const Navbar = () => {
	return (
		<nav>
			<div className="left">
				<div className="link-container">
					<a href="/" className="logo">
						<img src="/logo.png" alt="" />
						<span>RealEstate</span>
					</a>
				</div>
				<div className="link-container">
					<a href="/home">Home</a>
				</div>
				<div className="link-container">
					<a href="/about">About</a>
				</div>
				<div className="link-container">
					<a href="/contact">Contact</a>
				</div>
				<div className="link-container">
					<a href="/agents">Agents</a>
				</div>
			</div>
			<div className="right">
				<div className="link-container">
					<a href="/signin">SignIn</a>
				</div>
				<div className="link-container">
					<a href="/signup" className="register">
						SignUp
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
