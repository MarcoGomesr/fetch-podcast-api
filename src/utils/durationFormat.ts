export function getDurationFormat (duration: string) {
  let seconds = Math.floor(Number(duration) / 1000)
  const minutes = Math.floor(seconds / 60)
  seconds = seconds % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}
