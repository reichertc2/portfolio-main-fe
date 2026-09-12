import React from "react";
import {getByTestId, render} from "@testing-library/react";
import ContentContainer from "./ContentContainer";

describe("ContentContainer Tests", () => {
    test("renders Title", () => {


        const {getByText} = render(
            <ContentContainer title="Help" id={"Test_id"}>
                <p>Test</p>
            </ContentContainer>
        );

        const element = getByText("Help");
        expect(element).toBeInTheDocument();
    });

    // test("renders without title", () => {


    //   const { getByTestId } = render(
    //     <ContentContainer id={"Test_id"} children={undefined} />
    //   );

    //   const paragraphElement = getByTestId("Test_id");
    //   expect(paragraphElement).toBeInTheDocument();
    // });
});
