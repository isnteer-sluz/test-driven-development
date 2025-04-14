export function formatDuration(seconds: number): string {

  if (seconds < 0) throw new Error("seconds must be non-negative.");

  seconds = Math.round(seconds);

  const hour = Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  const minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  const second = seconds;
  
  let retVal = "";
  if (hour > 0) retVal += `${hour}h`;
  if (minute > 0) retVal += `${minute}m`;
  if (second > 0) retVal += `${second}s`;

  if (retVal === "") retVal = "0s";
  
  return retVal;
}
