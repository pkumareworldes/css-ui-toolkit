import Link from "@mui/material/Link";
import { ROFPropInterface } from "./rofInterface";
export default function ROF({ eleProps }: ROFPropInterface) {
  return (
    <div className="rof-Comp">
      {eleProps.iconComp ? <eleProps.iconComp /> : ""}
      <div
        className="text-main"
        style={{
          display: eleProps.alignRow ? "grid" : "flex",
        }}
      >
        <div
          className="rof--text"
          style={{ color: eleProps.fieldColor, ...eleProps.cssProps }}
        >
          {eleProps.fieldName}
        </div>
        {eleProps.isLink ? (
          <Link
            href={eleProps.link}
            underline={eleProps.underline}
            style={{ color: eleProps.valueColor, ...eleProps.cssProps }}
          >
            {eleProps.fieldValue}
          </Link>
        ) : (
          <div
            className="rof--text"
            style={{ color: eleProps.valueColor, ...eleProps.cssProps }}
          >
            {eleProps.fieldValue}
          </div>
        )}
      </div>
    </div>
  );
}
