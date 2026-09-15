import React from "react";
import {render, screen} from "@testing-library/react";
import AvailabilityStatusContainer from "./AvailabilityStatusContainer";
import type {IWorkStatus} from "@/app/_models/user";

const status = (overrides: Partial<IWorkStatus> = {}): IWorkStatus =>
    ({
        contract: false,
        fullTime: false,
        notOpen: false,
        ...overrides,
    }) as IWorkStatus;

describe("AvailabilityStatusContainer", () => {
    it("shows full-time copy when fullTime is true", () => {
        render(
            <AvailabilityStatusContainer
                availability={status({fullTime: true})}
            />
        );
        expect(
            screen.getByText("Open to full time work.")
        ).toBeInTheDocument();
    });

    it("shows contract copy when fullTime is false but isOpen is true", () => {
        render(
            <AvailabilityStatusContainer
                availability={status({contract: true, fullTime: false})}
            />
        );
        expect(
            screen.getByText("Open to contract work.")
        ).toBeInTheDocument();
    });

    it("treats notOpen=false as open even without contract or fullTime", () => {
        render(
            <AvailabilityStatusContainer
                availability={status({
                    contract: false,
                    fullTime: false,
                    notOpen: false,
                })}
            />
        );
        expect(
            screen.getByText("Open to contract work.")
        ).toBeInTheDocument();
    });

    it("shows unavailable copy when notOpen and no open flags", () => {
        render(
            <AvailabilityStatusContainer
                availability={status({
                    contract: false,
                    fullTime: false,
                    notOpen: true,
                })}
            />
        );
        expect(
            screen.getByText("Not available for work.")
        ).toBeInTheDocument();
    });

    it("stays open when notOpen is true but fullTime is true", () => {
        render(
            <AvailabilityStatusContainer
                availability={status({fullTime: true, notOpen: true})}
            />
        );
        expect(
            screen.getByText("Open to full time work.")
        ).toBeInTheDocument();
    });

    it("stays open when notOpen is true but contract is true", () => {
        render(
            <AvailabilityStatusContainer
                availability={status({contract: true, notOpen: true})}
            />
        );
        expect(
            screen.getByText("Open to contract work.")
        ).toBeInTheDocument();
    });

    it("prefers full-time copy over contract when both are true", () => {
        render(
            <AvailabilityStatusContainer
                availability={status({contract: true, fullTime: true})}
            />
        );
        expect(
            screen.getByText("Open to full time work.")
        ).toBeInTheDocument();
        expect(
            screen.queryByText("Open to contract work.")
        ).not.toBeInTheDocument();
    });

    it("applies available styles when open", () => {
        const {container} = render(
            <AvailabilityStatusContainer
                availability={status({fullTime: true})}
            />
        );
        const wrapper = container.firstChild as HTMLElement;
        const indicator = wrapper.querySelector("div");

        expect(wrapper).toHaveClass(
            "block",
            "my-6",
            "px-2",
            "py-1",
            "text-text",
            "dark:text-text-dark",
            "rounded-xl",
            "w-full",
            "sm:w-auto",
            "md:w-1/4",
            "bg-emerald-600/25",
            "border-emerald-600",
            "border-solid",
            "border"
        );
        expect(indicator).toHaveClass(
            "inline-block",
            "w-3",
            "h-3",
            "md:w-4",
            "md:h-4",
            "rounded-full",
            "align-middle",
            "bg-emerald-600",
            "border-emerald-600",
            "border-solid",
            "border"
        );
    });

    it("applies unavailable styles when closed", () => {
        const {container} = render(
            <AvailabilityStatusContainer
                availability={status({notOpen: true})}
            />
        );
        const wrapper = container.firstChild as HTMLElement;
        const indicator = wrapper.querySelector("div");

        expect(wrapper).toHaveClass("bg-rose-900/25", "border-rose-900");
        expect(wrapper).not.toHaveClass("bg-emerald-600/25");
        expect(indicator).toHaveClass("bg-rose-900", "border-rose-900");
        expect(indicator).not.toHaveClass("bg-emerald-600");
    });

    it("applies shared text classes on the status paragraph", () => {
        render(
            <AvailabilityStatusContainer
                availability={status({fullTime: true})}
            />
        );
        expect(screen.getByText("Open to full time work.")).toHaveClass(
            "inline-block",
            "ml-2",
            "text-sm",
            "md:text-base",
            "align-middle"
        );
    });
});