import Link from "next/link"
import Image from "next/image"
import { FileText, Zap, Shield, BarChart, CheckCircle, FileUp, Wand2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
        <Link className="flex items-center gap-2 font-bold text-xl" href="#">
          <FileText className="h-6 w-6 text-rose-500" />
          <span>SwiftPDF</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#faq">
            FAQ
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            href="#"
          >
            Sign In
          </Link>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-rose-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            href="#"
          >
            Get Started
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transform Your PDF Workflow with SwiftPDF
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The fastest way to edit, convert, and manage PDF documents. Save time and boost productivity with
                    our intuitive tools.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-rose-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    href="#"
                  >
                    Try for Free
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    href="#how-it-works"
                  >
                    See How It Works
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>14-day free trial</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] h-[400px] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="SwiftPDF Dashboard"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Everything You Need for PDF Management
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  SwiftPDF provides powerful tools to handle all your PDF needs in one place.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <Wand2 className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">Edit PDFs</h3>
                <p className="text-center text-muted-foreground">
                  Easily edit text, images, and other elements in your PDF documents with our intuitive editor.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <Zap className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">Convert Files</h3>
                <p className="text-center text-muted-foreground">
                  Convert PDFs to Word, Excel, PowerPoint, and other formats with just a few clicks.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <Shield className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">Secure Documents</h3>
                <p className="text-center text-muted-foreground">
                  Protect your PDFs with passwords, encryption, and digital signatures for enhanced security.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <FileUp className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">Batch Processing</h3>
                <p className="text-center text-muted-foreground">
                  Process multiple PDFs at once to save time and increase productivity.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <BarChart className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">Analytics</h3>
                <p className="text-center text-muted-foreground">
                  Track document usage, views, and interactions with comprehensive analytics.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <FileText className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">OCR Technology</h3>
                <p className="text-center text-muted-foreground">
                  Extract text from scanned documents and images with our advanced OCR technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">How It Works</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, Fast, and Efficient</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Get started with SwiftPDF in just a few simple steps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Upload Your PDF</h3>
                      <p className="text-muted-foreground">
                        Drag and drop your PDF files or select them from your device or cloud storage.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Edit and Modify</h3>
                      <p className="text-muted-foreground">
                        Use our intuitive tools to edit text, images, and other elements in your PDF.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Save and Share</h3>
                      <p className="text-muted-foreground">
                        Download your edited PDF or share it directly with others via a secure link.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] h-[350px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=350&width=500"
                    alt="SwiftPDF Workflow"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, Transparent Pricing</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Choose the plan that works best for you and your team.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Basic</h3>
                  <p className="text-muted-foreground">Perfect for individuals and small projects.</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$9</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Edit up to 10 PDFs per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Basic editing tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Convert PDFs to 3 formats</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Email support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    className="inline-flex h-10 w-full items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    href="#"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-rose-500 px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-muted-foreground">Ideal for professionals and small teams.</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$19</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Edit up to 50 PDFs per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Advanced editing tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Convert PDFs to all formats</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>OCR technology</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Priority email support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-rose-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    href="#"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-muted-foreground">For organizations with advanced needs.</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$49</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Unlimited PDF editing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>All Pro features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Batch processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    className="inline-flex h-10 w-full items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    href="#"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Customers Say</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Don't just take our word for it. Here's what our customers have to say about SwiftPDF.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 fill-rose-500 text-rose-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 flex-1">
                  <p className="text-muted-foreground">
                    "SwiftPDF has completely transformed how our team handles documents. The editing tools are intuitive
                    and the conversion features save us hours each week."
                  </p>
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="rounded-full bg-muted p-1">
                    <div className="h-8 w-8 rounded-full bg-gray-300" />
                  </div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Marketing Director</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 fill-rose-500 text-rose-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 flex-1">
                  <p className="text-muted-foreground">
                    "As a small business owner, I needed an affordable solution for managing PDFs. SwiftPDF offers
                    everything I need at a price that fits my budget."
                  </p>
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="rounded-full bg-muted p-1">
                    <div className="h-8 w-8 rounded-full bg-gray-300" />
                  </div>
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Small Business Owner</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 fill-rose-500 text-rose-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 flex-1">
                  <p className="text-muted-foreground">
                    "The OCR technology in SwiftPDF is a game-changer. We can now extract text from scanned documents
                    with incredible accuracy, saving us countless hours of manual work."
                  </p>
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="rounded-full bg-muted p-1">
                    <div className="h-8 w-8 rounded-full bg-gray-300" />
                  </div>
                  <div>
                    <p className="font-medium">Emily Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Legal Assistant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Find answers to common questions about SwiftPDF.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is SwiftPDF?</AccordionTrigger>
                  <AccordionContent>
                    SwiftPDF is a comprehensive PDF management solution that allows you to edit, convert, and secure PDF
                    documents with ease. Our platform is designed to streamline your document workflow and boost
                    productivity.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How secure are my documents with SwiftPDF?</AccordionTrigger>
                  <AccordionContent>
                    We take security seriously. All documents uploaded to SwiftPDF are encrypted both in transit and at
                    rest. We use industry-standard security protocols to ensure your data remains private and secure.
                    Additionally, we offer features like password protection and digital signatures to add extra layers
                    of security to your PDFs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I try SwiftPDF before purchasing?</AccordionTrigger>
                  <AccordionContent>
                    Yes! We offer a 14-day free trial that gives you access to all features of our Pro plan. No credit
                    card is required to start your trial. This allows you to fully explore SwiftPDF's capabilities
                    before making a purchase decision.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What file formats can I convert my PDFs to?</AccordionTrigger>
                  <AccordionContent>
                    SwiftPDF supports conversion to a wide range of formats including Word (DOCX), Excel (XLSX),
                    PowerPoint (PPTX), images (JPG, PNG), HTML, and plain text. Our Pro and Enterprise plans offer
                    additional format options to meet your specific needs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Is there a limit to the file size I can upload?</AccordionTrigger>
                  <AccordionContent>
                    Basic plans have a 10MB file size limit, while Pro plans support files up to 50MB. Enterprise plans
                    allow for files up to 100MB. If you need to work with larger files, please contact our sales team
                    for custom solutions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    Do you offer discounts for non-profits or educational institutions?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer special pricing for non-profit organizations, educational institutions, and students.
                    Please contact our sales team with verification of your status to learn more about our discount
                    programs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Transform Your PDF Workflow?
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Join thousands of satisfied customers who have streamlined their document processes with SwiftPDF.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-rose-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  href="#"
                >
                  Start Free Trial
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  href="#"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Stay Updated</h3>
                <p className="text-muted-foreground">
                  Subscribe to our newsletter for the latest updates, tips, and special offers.
                </p>
                <div className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" />
                  <Button className="bg-rose-500 hover:bg-rose-600">Subscribe</Button>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Contact Us</h3>
                <p className="text-muted-foreground">Have questions or need assistance? Our team is here to help.</p>
                <p className="text-muted-foreground">Email: support@swiftpdf.com</p>
                <p className="text-muted-foreground">Phone: (123) 456-7890</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Follow Us</h3>
                <p className="text-muted-foreground">Stay connected with us on social media for news and updates.</p>
                <div className="flex gap-4">
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} SwiftPDF. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Cookie Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

