import Link from 'gatsby-link'
import React from 'react'

// Since DOM elements <a> cannot receive activeClassName,
// destructure the prop here and pass it only to GatsbyLink
const Link = ({ children, to, activeClassName, ...other }) => {
	// Tailor the following test to your environment.
	// This example assumes that any internal link (intended for Gatsby)
	// will start with exactly one slash, and that anything else is external.
	const internal = /^\/(?!\/)/.test(to)

	// Use Gatsby Link for internal links, and <a> for others
	if (internal) {
		return (
			<GatsbyLink to={to} activeClassName={activeClassName} {...other}>
				{children}
			</GatsbyLink>
		)
	}
	return (
		<a target="_blank" rel={'noopener noreferrer'} href={to} {...other}>
			{children}
		</a>
	)
}

export default Link