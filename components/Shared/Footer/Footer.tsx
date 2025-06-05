import Link  from "next/link";

export function Footer() {
  return (
  <footer className="py-4 px-6 border-t bg-whitew-full">
    <div className="flex justify-between items-center xt-sm xt-slate-500">
        <p>2025 @ Diego Oruezabal</p>
    
    <div className="flex gap-2 items-center">
        <Link href="/privacy-policy">Privacidad</Link>
        <Link href="/terms">Términos de uso</Link>

    </div>
    </div>

  </footer>
  )
}
