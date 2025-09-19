"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Twitter, Globe } from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-section">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-description-primary">
            Ready to build amazing communities together? Let's discuss your next project!
          </p>
        </div>

        <div className=" gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8 fade-in-left">
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <Image src="/images/hero-gif.gif" alt="Contact illustration" fill className="object-contain rounded-full" />
              </div>
            </div>

            <div className="space-y-6 gap-4 grid-cols-1 md:grid-cols-2 grid">
              <Card className="scale-in">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="heading-card">Email</div>
                      <a href="mailto:omosuyioluwafemi1@gmail.com" aria-label="Send email to omosuyioluwafemi1@gmail.com" className="text-body text-primary hover:underline">
                        omosuyioluwafemi1@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="scale-in">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Twitter className="w-6 h-6 text-primary" aria-hidden />
                    </div>
                    <div>
                      <div className="heading-card">Twitter</div>
                      <a href="https://twitter.com/0xfemmie" target="_blank" rel="noopener noreferrer" aria-label="Open Twitter profile @femmie" className="text-body text-primary hover:underline">
                        @0xfemmie
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="scale-in">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" aria-hidden />
                    </div>
                    <div>
                      <div className="heading-card">Farcaster</div>
                      <a href="https://warpcast.com/femmie" target="_blank" rel="noopener noreferrer" aria-label="Open Farcaster profile femmie" className="text-small text-primary hover:underline">
                        femmie
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="scale-in">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-primary" aria-hidden />
                    </div>
                    <div>
                      <div className="heading-card">Telegram</div>
                      <a href="https://t.me/FeMMie6994" target="_blank" rel="noopener noreferrer" aria-label="Open Telegram profile @FeMMie6994" className="text-body text-primary hover:underline">
                        @FeMMie6994
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

      
        </div>
      </div>
    </section>
  )
}
