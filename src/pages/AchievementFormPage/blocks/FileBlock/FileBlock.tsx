import React, { ChangeEvent, useRef, useState } from "react";
import { cn } from "../../../../services/helpers/classname";

import './styles.scss'

const block = cn("file-block");

export function FileBlock() {
  const [filename, setFilename] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={block()}>
      <input
        className={block("input")}
        ref={inputRef}
        type="file"
        onChange={(e: ChangeEvent) => {
          const target = e.target as HTMLInputElement;

          const files = target.files;
          if (files?.length) {
            const file = files[0];
            setFilename(file?.name);
          } else {
            return null;
          }
        }}
      />
      <div className={block("card")} onClick={() => inputRef.current?.click()}>
        {filename ||
          "Загрузите скан или фотографию подтверждающего документа (JPG, PNG, PDF), максимальный размер файла – 10 МБ».)"}
      </div>
    </div>
  );
}
