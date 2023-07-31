export function getDurationFormat (duration: string) {
  if (duration === undefined) return 'No avaiable'
  let seconds = Math.floor(Number(duration) / 1000)
  const hours = Math.floor(seconds / 3600)
  seconds %= 3600
  const minutes = Math.floor(seconds / 60)
  seconds %= 60

  return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}
