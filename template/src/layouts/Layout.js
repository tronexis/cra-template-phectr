import { Helmet as Head } from "react-helmet";
import tw, { styled } from "twin.macro";

const Layout = ({ title, description, children, ...props }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container {...props}>{children}</Container>
    </>
  );
};

const Container = styled.div`
  ${tw``}
`;

export default Layout;
