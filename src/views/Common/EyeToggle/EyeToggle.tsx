import React from 'react';
import './EyeToggle.scss';
import { IButton } from "../../../interfaces/IButton";
import classNames from "classnames";

interface IProps {
    isActive: boolean;
    onToggle: () => void;
}

const EyeToggle: React.FC<IProps> = ({ isActive, onToggle }) => {
    const buttonData: IButton = {
        image: isActive ? "ico/eye-open.png" : "ico/eye-closed.png",
        imageAlt: "toggle labels visibility",
        id: "toggle-labels-visibility",
        onClick: () => onToggle(),
        tooltip: isActive ? "Hide all labels" : "Show all labels",
        isDisabled: false
    };

    const getClassName = () => {
        return classNames(
            "EyeToggle",
            {
                "active": isActive,
                "disabled": buttonData.isDisabled
            }
        );
    };

    return (
        <div
            className={getClassName()}
            id={buttonData.id}
            onClick={buttonData.onClick}
            title={buttonData.tooltip}
        >
            <img
                src={buttonData.image}
                alt={buttonData.imageAlt}
                title={buttonData.tooltip}
            />
        </div>
    );
};

export default EyeToggle;