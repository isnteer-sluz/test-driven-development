import { formatDuration } from "./duration"

test("The input 33 should return 33s", () =>  {
    expect(formatDuration(33)).toBe("33s")
})

test("The input 123 should return 2m3s", () =>  {
    expect(formatDuration(123)).toBe("2m3s")
})

test("The input 500 should return 8m20s", () =>  {
    expect(formatDuration(500)).toBe("8m20s")
})

test("The input 3600 should return 1h", () =>  {
    expect(formatDuration(3600)).toBe("1h")
})

test("The input 3999 should return 1h6m30s", () =>  {
    expect(formatDuration(3999)).toBe("1h6m30s")
})