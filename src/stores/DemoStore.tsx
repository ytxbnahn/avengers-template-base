import { observable, action, computed } from "mobx";

class DemoStore {
  @observable private message: string = "hello world";
  @action changeMessage = () => {
    this.message = "hello mobx";
  };
  @computed get messagePro(): string {
    return this.message + "kkk";
  }
}
export default DemoStore;
