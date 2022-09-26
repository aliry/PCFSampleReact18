import * as React from "react";
import { IInputs } from "./generated/ManifestTypes";

declare var SampleNameSpace: {
  Utils: {
    getPrefixedName: (name: string) => string;
    isString: (value: any) => boolean;
  }
}

export class MainContainer extends React.Component<{ context: ComponentFramework.Context<IInputs> }> {
  render() {
    const propValue = (SampleNameSpace.Utils.isString(this.props.context.parameters.sampleProperty.raw) ? this.props.context.parameters.sampleProperty.raw : "") as string;
    const prefixedValue = SampleNameSpace.Utils.getPrefixedName(propValue);
    return (
      <>
        <div>{`This is rendered with React version: ${React.version}`}</div>
        <div>{`sampleProperty: ${propValue}`}</div>
        <div>{`PrefixedName: ${prefixedValue}`}</div>
      </>
    );
  }
}