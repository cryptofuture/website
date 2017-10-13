import React, { Component } from 'react';
import {
	mediaLarge,
	NavItems,
	NavItem,
	NavItemLogIn,
	NavItemJoin,
} from './styles';

export default class AppNav extends Component {
	mql = window.matchMedia(mediaLarge);

	state = {
		large: this.mql.matches,
	};

	componentDidMount() {
		this.mql.addListener(this.resize);
	}

	resize = e => {
		this.setState({
			large: e.matches,
		});
	};

	render() {
		const small = this.props.open ? 0 : -1;
		const tabIndex = this.state.large ? 0 : small;

		return (
			<NavItems {...this.props}>
				<NavItem to="/for-musicians" tabIndex={tabIndex}>
					For musicians
				</NavItem>
				<NavItem to="/for-listeners" tabIndex={tabIndex}>
					For listeners
				</NavItem>
				<NavItem to="/how-it-works" tabIndex={tabIndex}>
					How it works
				</NavItem>
				<NavItem to="/currency" tabIndex={tabIndex}>
					Currency
				</NavItem>
				<NavItem to="/faq" tabIndex={tabIndex}>
					FAQ
				</NavItem>
				<NavItemLogIn to="/welcome" tabIndex={tabIndex}>
					Log in
				</NavItemLogIn>
				<NavItemJoin to="/welcome" tabIndex={tabIndex}>
					Sign up
				</NavItemJoin>
			</NavItems>
		);
	}
}
