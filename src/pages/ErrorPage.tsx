import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />

      <Box padding={5}>
        {isRouteErrorResponse(error) ? (
          <div>
            <Heading>Oops!</Heading>
            <Text>This page does not exsit</Text>
          </div>
        ) : (
          <div>
            <Heading>Oops!</Heading>
            <Text>Sorry! An unexpecetd error occurred</Text>
          </div>
        )}
      </Box>
    </>
  );
};

export default ErrorPage;
