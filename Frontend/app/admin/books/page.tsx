'use client';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from '@/components/ui/pagination';
import { Plus, Search } from 'lucide-react';
import { useState, FormEvent, ChangeEvent } from 'react';
import { Product } from '@/types/product.types';
import Image from 'next/image';

interface Book extends Product {
  author: string;
  stock: number;
}

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 12.99, stock: 45, srcUrl: '' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 10.99, stock: 32, srcUrl: '' },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(books.length / itemsPerPage);

  const [showBookForm, setShowBookForm] = useState(false);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleAddBookClick = () => {
    setEditingBook(null);
    setShowBookForm(true);
  };

  const handleEditBookClick = (book: Book) => {
    setEditingBook(book);
    setShowBookForm(true);
  };

  const handleCancelClick = () => {
    setShowBookForm(false);
    setEditingBook(null);
  };

  const handleSaveBook = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const bookData = Object.fromEntries(formData.entries());
    
    if (editingBook) {
      
      setBooks(books.map(book => 
        book.id === editingBook.id 
          ? { 
              ...book, 
              title: bookData.title as string,
              author: bookData.author as string,
              price: parseFloat(bookData.price as string),
              stock: parseInt(bookData.stock as string),
              srcUrl: imagePreview || book.srcUrl
            }
          : book
      ));
    } else {
      // Add new book
      const newBook: Book = {
        id: Math.max(...books.map(b => b.id)) + 1,
        title: bookData.title as string,
        author: bookData.author as string,
        price: parseFloat(bookData.price as string),
        stock: parseInt(bookData.stock as string),
        srcUrl: imagePreview || ''
      };
      setBooks([...books, newBook]);
    }

    setShowBookForm(false);
    setEditingBook(null);
    setImagePreview(null);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteBook = (bookId: number) => {
    setBooks(books.filter(book => book.id !== bookId));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Books Management</h1>
        <Button onClick={handleAddBookClick}>
          <Plus className="mr-2 h-4 w-4" />
          Add Book
        </Button>
      </div>

      {showBookForm && (
        <div className="border rounded-md p-4 space-y-4">
          <h2 className="text-2xl font-bold">{editingBook ? 'Edit Book' : 'Add New Book'}</h2>
          <form onSubmit={handleSaveBook} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                  <Input id="title" name="title" defaultValue={editingBook?.title} required />
                </div>
                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                  <Input id="author" name="author" defaultValue={editingBook?.author} required />
                </div>
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                  <Input id="price" name="price" type="number" step="0.01" defaultValue={editingBook?.price} required />
                </div>
                <div>
                  <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Stock</label>
                  <Input id="stock" name="stock" type="number" defaultValue={editingBook?.stock} required />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700">Book Cover Image</label>
                  <Input 
                    id="image" 
                    name="image" 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageChange}
                    className="cursor-pointer"
                  />
                </div>
                {(imagePreview || editingBook?.srcUrl) && (
                  <div className="relative w-full h-48 border rounded-md overflow-hidden">
                    <Image
                      src={imagePreview || editingBook?.srcUrl || ''}
                      alt="Book cover preview"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={handleCancelClick}>Cancel</Button>
              <Button type="submit">{editingBook ? 'Save Changes' : 'Add Book'}</Button>
            </div>
          </form>
        </div>
      )}

      <div className="flex items-center gap-2">
        <Input placeholder="Search books..." className="max-w-sm" />
        <Button variant="outline">
          <Search className="h-4 w-4" />
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell className="font-medium">{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>${book.price.toFixed(2)}</TableCell>
                <TableCell>{book.stock}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleEditBookClick(book)}>
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDeleteBook(book.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage((prev) => Math.max(prev - 1, 1));
              }}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(i + 1);
                }}
                isActive={currentPage === i + 1}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage((prev) => Math.min(prev + 1, totalPages));
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}