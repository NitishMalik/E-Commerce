import React from "react";
import MenuItem from "../menuItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directorySelector";
import "./styles.scss";

const Directory = ({ sections }) => (
  <div className="directory">
    {sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps}></MenuItem>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);
