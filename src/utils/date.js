/**
 *
 * @param {Date | string | number} from
 * @param {Date | string | number} to
 */
export function countdown(from, to) {
  const oneSecondInMilli = 1000,
    oneMinuteInMilli = oneSecondInMilli * 60,
    oneHourInMilli = oneMinuteInMilli * 60,
    oneDayInMilli = oneHourInMilli * 24;

  from = new Date(from);
  to = new Date(to);

  const fromTime = from.getTime(),
    toTime = to.getTime(),
    distance = toTime - fromTime;

  let days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0;

  if (distance > 0) {
    days = Math.max(0, Math.floor(distance / oneDayInMilli));
    hours = Math.max(
      0,
      Math.floor((distance % oneDayInMilli) / oneHourInMilli)
    );
    minutes = Math.max(
      0,
      Math.floor((distance % oneHourInMilli) / oneMinuteInMilli)
    );
    seconds = Math.max(
      0,
      Math.floor((distance % oneMinuteInMilli) / oneSecondInMilli)
    );
  }

  return { days, hours, minutes, seconds };
}
