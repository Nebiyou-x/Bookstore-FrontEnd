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
import { useState, FormEvent } from 'react';
import Image from 'next/image';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const [showUserForm, setShowUserForm] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleAddUserClick = () => {
    setEditingUser(null);
    setShowUserForm(true);
  };

  const handleEditUserClick = (user: User) => {
    setEditingUser(user);
    setShowUserForm(true);
  };

  const handleCancelClick = () => {
    setShowUserForm(false);
    setEditingUser(null);
    setImagePreview(null);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    
    if (editingUser) {
      
      setUsers(users.map(user => 
        user.id === editingUser.id 
          ? { 
              ...user, 
              name: userData.name as string,
              email: userData.email as string,
              role: userData.role as string,
              avatar: imagePreview || user.avatar
            }
          : user
      ));
    } else {
      
      const newUser: User = {
        id: Math.max(...users.map(u => u.id)) + 1,
        name: userData.name as string,
        email: userData.email as string,
        role: userData.role as string,
        avatar: imagePreview || undefined
      };
      setUsers([...users, newUser]);
    }

    setShowUserForm(false);
    setEditingUser(null);
    setImagePreview(null);
  };

  const handleDeleteUser = (userId: number) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Users Management</h1>
        <Button onClick={handleAddUserClick}>
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      {showUserForm && (
        <div className="border rounded-md p-4 space-y-4">
          <h2 className="text-2xl font-bold">{editingUser ? 'Edit User' : 'Add New User'}</h2>
          <form onSubmit={handleSaveUser} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <Input id="name" name="name" defaultValue={editingUser?.name} required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <Input id="email" name="email" type="email" defaultValue={editingUser?.email} required />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                  <select
                    id="role"
                    name="role"
                    defaultValue={editingUser?.role}
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    required
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">Profile Picture</label>
                  <Input 
                    id="avatar" 
                    name="avatar" 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageChange}
                    className="cursor-pointer"
                  />
                </div>
                {(imagePreview || editingUser?.avatar) && (
                  <div className="relative w-32 h-32 border rounded-full overflow-hidden">
                    <Image
                      src={imagePreview || editingUser?.avatar || ''}
                      alt="Profile picture preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={handleCancelClick}>Cancel</Button>
              <Button type="submit">{editingUser ? 'Save Changes' : 'Add User'}</Button>
            </div>
          </form>
        </div>
      )}

      <div className="flex items-center gap-2">
        <Input placeholder="Search users..." className="max-w-sm" />
        <Button variant="outline">
          <Search className="h-4 w-4" />
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleEditUserClick(user)}>
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDeleteUser(user.id)}>
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