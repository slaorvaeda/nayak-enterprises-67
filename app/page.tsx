import { ArrowRight, Package, Shield, Truck, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Nayak Enterprises</h1>
              <p className="text-xl mb-8 text-slate-200">
                Your trusted wholesale partner for quality products. We supply retailers and shopkeepers with premium
                merchandise at competitive prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/catalog">
                    Browse Catalog <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  <Link href="/register">Become a Partner</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Warehouse and distribution"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Nayak Enterprises?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We provide comprehensive wholesale solutions for retailers and shopkeepers across the region.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Package className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Wide Product Range</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Extensive catalog of quality products across multiple categories for your retail needs.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <CardTitle>B2B Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Specialized service for retailers and shopkeepers with bulk pricing and trade terms.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Truck className="h-12 w-12 mx-auto text-orange-600 mb-4" />
                <CardTitle>Fast Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Reliable distribution network ensuring timely delivery to your store location.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Quality Assured</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  All products are quality checked and come with our guarantee for your peace of mind.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Partnership?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of retailers who trust Nayak Enterprises for their wholesale needs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/register">Register Your Store Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
