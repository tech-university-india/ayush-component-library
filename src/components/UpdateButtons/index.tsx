import classNames from "classnames"
import  CustomButton  from "../CustomButton"

import React from "react"

interface UpdateButtonsProps {
  onClick: (item: string) => void
  mainText?: string
  invalidItems?: string[]
}
export default function UpdateButtons ({
  onClick,
  mainText = "Update Via",
  invalidItems
}: UpdateButtonsProps) : JSX.Element | null{
  const items = ["Aadhaar", "Mobile", "Password"]
  return (
    <div className="flex w-full justify-between">
      {mainText && (
        <div className="pt-2 pr-4 max-w-[30%">{mainText}</div>
      )}
      <div
        className={classNames(
          !mainText ? "w-full" : "w-[70%]",
          "flex justify-around"
        )}
      >
        {items.map((item, index) =>
          invalidItems && invalidItems.includes(item)
            ? (
              <React.Fragment></React.Fragment>
            )
            : (
              <CustomButton
                key={index}
                className="bg-options text-black h-10 px-[10px] mx-1 sm:px-4 md:px-7 lg:px-9 py-1"
                onClick={() => onClick(item)}
              >
                {item}
              </CustomButton>
            )
        )}
      </div>
    </div>
  )
}
