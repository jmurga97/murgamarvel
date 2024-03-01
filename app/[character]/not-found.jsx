import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: '85dvh',
        gap: '16px'
      }}
    >
      <h1>404 Not Found</h1>
      <p>Could not find the requested character</p>

      <Link href="/">Go Back</Link>
    </main>
  );
}
