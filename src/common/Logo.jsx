import logoWhiteUrl from "assets/imgs/accello-logo-white.png";
import logoBlackUrl from "assets/imgs/accello-logo-black.png";

/**
 *
 * @param {import("react").ComponentPropsWithoutRef<'div'> & {color: 'white' | 'black'}} props
 * @returns
 */
function Logo(props) {
  const { color = "black", ...restProps } = props;
  const logoUrl = { white: logoWhiteUrl, black: logoBlackUrl }[color];
  return (
    <img src={logoUrl} alt="logo" style={{ maxHeight: 120 }} {...restProps} />
  );
}

export default Logo;
