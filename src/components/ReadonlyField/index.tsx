import Link from "@mui/material/Link";
import { IReadOnlyFeildProp } from "./readOnlyFieldInterface";
export default function ReadOnlyField({ eleProps }: IReadOnlyFeildProp) {
  const { chipComp } = eleProps;
  return (
    <div
      className="rof-Comp"
      style={{
        display: "flex",
        alignItems: "center",
        gap: eleProps.iconSpacing,
      }}
    >
      {eleProps.iconComp ? (
        <div className="rof--icon">
          <eleProps.iconComp />
        </div>
      ) : (
        ""
      )}
      <div
        className="text-main"
        style={{
          display: eleProps.alignRow ? "grid" : "flex",
          alignItems: "center",
        }}
      >
        <div
          className="rof--text"
          style={{
            color: eleProps.fieldColor,
            fontWeight: eleProps.fieldFontWeight,
            ...eleProps.cssProps,
          }}
        >
          {eleProps.fieldName}
        </div>

        {chipComp?.component ? (
          <div className="rof--chip">
            <chipComp.component eleProps={chipComp.props} />
          </div>
        ) : (
          ""
        )}

        {eleProps.link ? (
          <Link
            href={eleProps.link}
            underline={eleProps.underline}
            style={{
              color: eleProps.valueColor,
              fontWeight: eleProps.valueFontWeight,
              textDecorationColor: eleProps.valueColor,
              ...eleProps.cssProps,
            }}
          >
            {eleProps.fieldValue}
          </Link>
        ) : (
          eleProps.fieldValue && (
            <div
              className="rof--text"
              style={{
                color: eleProps.valueColor,
                fontWeight: eleProps.valueFontWeight,
                ...eleProps.cssProps,
              }}
            >
              {eleProps.fieldValue}
            </div>
          )
        )}
      </div>
    </div>
  );
}
