import React from "react";
import { inject, observer } from "mobx-react";
import DemoStore from "../../stores/DemoStore";
interface IProps {}
interface IState {}
interface InjectedProps extends IProps {
  demo: DemoStore;
}

@inject("demo")
@observer
export default class Demo extends React.Component<IProps, IState> {
  get injected() {
    return this.props as InjectedProps;
  }
  private handleDemo = () => {
    this.injected.demo.changeMessage();
  };
  render() {
    return <div onClick={this.handleDemo}>{this.injected.demo.messagePro}</div>;
  }
}
