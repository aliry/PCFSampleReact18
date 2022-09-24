import * as React from "react";
import { IInputs } from "./generated/ManifestTypes";
export class MainContainer extends React.Component<{ context: ComponentFramework.Context<IInputs> }> {
  render() {
    return (
      <>
        <div>{`This is rendered with React version: ${React.version}`}</div>
        <div>{`sampleProperty: ${this.props.context.parameters.sampleProperty.raw ?? ""}`}</div>
      </>
    );
  }
}