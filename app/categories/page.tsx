"use client"

import { Package, ShoppingBag, Utensils, Home, Coffee, Heart, Shirt, Gamepad2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const categories = [
  {
    id: 1,
    name: "Food & Grains",
    description: "Rice, wheat, pulses, and other food essentials",
    icon: Utensils,
    image: "/placeholder.svg?height=200&width=300",
    productCount: 156,
    color: "bg-orange-100 text-orange-600",
    subcategories: ["Rice & Grains", "Pulses & Lentils", "Spices", "Oil & Ghee", "Sugar & Salt"],
  },
  {
    id: 2,
    name: "Household Items",
    description: "Cleaning supplies, detergents, and home essentials",
    icon: Home,
    image: "/placeholder.svg?height=200&width=300",
    productCount: 89,
    color: "bg-blue-100 text-blue-600",
    subcategories: ["Cleaning Supplies", "Detergents", "Soaps", "Paper Products", "Storage"],
  },
  {
    id: 3,
    name: "Beverages",
    description: "Tea, coffee, soft drinks, and beverage supplies",
    icon: Coffee,
    image: "/placeholder.svg?height=200&width=300",
    productCount: 67,
    color: "bg-green-100 text-green-600",
    subcategories: ["Tea", "Coffee", "Soft Drinks", "Juices", "Energy Drinks"],
  },
  {
    id: 4,
    name: "Snacks & Confectionery",
    description: "Biscuits, chocolates, chips, and snack items",
    icon: ShoppingBag,
    image: "/placeholder.svg?height=200&width=300",
    productCount: 134,
    color: "bg-purple-100 text-purple-600",
    subcategories: ["Biscuits", "Chocolates", "Chips", "Namkeen", "Sweets"],
  },
  {
    id: 5,
    name: "Personal Care",
    description: "Soaps, shampoos, cosmetics, and hygiene products",
    icon: Heart,
    image: "/placeholder.svg?height=200&width=300",
    productCount: 78,
    color: "bg-pink-100 text-pink-600",
    subcategories: ["Hair Care", "Skin Care", "Oral Care", "Bath & Body", "Cosmetics"],
  },
  {
    id: 6,
    name: "Textiles & Apparel",
    description: "Clothing, fabrics, and textile products",
    icon: Shirt,
    image: "/placeholder.svg?height=200&width=300",
    productCount: 45,
    color: "bg-indigo-100 text-indigo-600",
    subcategories: ["Men's Wear", "Women's Wear", "Kids Wear", "Fabrics", "Accessories"],
  },
  {
    id: 7,
    name: "Electronics & Gadgets",
    description: "Mobile accessories, electronics, and gadgets",
    icon: Gamepad2,
    image: "/placeholder.svg?height=200&width=300",
    productCount: 92,
    color: "bg-red-100 text-red-600",
    subcategories: ["Mobile Accessories", "Electronics", "Gadgets", "Batteries", "Cables"],
  },
  {
    id: 8,
    name: "Stationery & Office",
    description: "Pens, papers, office supplies, and stationery items",
    icon: Package,
    image: "/placeholder.svg?height=200&width=300",
    productCount: 63,
    color: "bg-yellow-100 text-yellow-600",
    subcategories: ["Writing Materials", "Paper Products", "Office Supplies", "Art & Craft", "Books"],
  },
]

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Product Categories</h1>
        <p className="text-muted-foreground">
          Browse our extensive range of wholesale products organized by categories. Find everything you need for your
          retail business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => {
          const IconComponent = category.icon
          return (
            <Link key={category.id} href={`/catalog?category=${encodeURIComponent(category.name)}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  />
                  <div className={`absolute top-4 left-4 p-2 rounded-full ${category.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-white text-gray-800">{category.productCount} items</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground">Popular Subcategories:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.subcategories.slice(0, 3).map((sub, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {sub}
                        </Badge>
                      ))}
                      {category.subcategories.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{category.subcategories.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* Featured Categories Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Food & Grains</h3>
                  <p className="text-muted-foreground mb-4">
                    Essential food items for every retail store. Premium quality at wholesale prices.
                  </p>
                  <Badge className="bg-blue-600">Best Seller</Badge>
                </div>
                <Utensils className="h-16 w-16 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-50 to-green-100">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Personal Care</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete range of personal care products for your customers' daily needs.
                  </p>
                  <Badge className="bg-green-600">High Demand</Badge>
                </div>
                <Heart className="h-16 w-16 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
