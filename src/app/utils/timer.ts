export class Timer {
  static timer: ReturnType<typeof setInterval> | null;

  public static getTimer() {
    return this.timer;
  }

  public static setTimer(timer: ReturnType<typeof setInterval> | null) {
    this.timer = timer;
  }
}
