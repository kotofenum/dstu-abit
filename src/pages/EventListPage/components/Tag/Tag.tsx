import React from "react";
import { cn } from "../../../../services/helpers/classname";

import { ReactComponent as CloseIcon } from "../../../../assets/svg/close.svg";
import ColorHash from "color-hash";

import "./styles.scss";
import { EducationTypePlain } from "../../../../types/EducationType";

const block = cn("tag");

interface ITagProps {
  name: string;
  type?: EducationTypePlain;
  disabled?: boolean;
  isConnectButton?: boolean;
  isButton?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onRemove?: () => void;
}

export function Tag({
  name,
  type,
  disabled,
  isButton,
  isConnectButton,
  onClick,
  onRemove,
}: ITagProps) {
  return (
    <div
      className={block({
        button: isButton,
        connect: isConnectButton,
        disabled,
        [type! || null]: true,
      })}
      // style={
      //   !isButton && !isConnectButton && !disabled
      //     ? { backgroundColor:  }
      //     : undefined
      // }
      onClick={onClick}
    >
      <span>{name}</span>
      {onRemove && <CloseIcon className={block("remove")} onClick={onRemove} />}
    </div>
  );
}
