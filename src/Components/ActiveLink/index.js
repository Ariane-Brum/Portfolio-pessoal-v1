import { cloneElement } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export function ActiveLink({ children, activeClassName, ...rest }) {
  const { asPath } = useRouter();

  const className = asPath === rest.href ? activeClassName : "";

  return <Link {...rest}>{cloneElement(children, { className })}</Link>;
}
