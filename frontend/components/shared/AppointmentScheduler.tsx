"use client"
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export function AppointmentScheduler() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [doctor, setDoctor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the appointment details to your backend
    console.log('Appointment scheduled:', { date, time, doctor });
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Schedule an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="time">Time</Label>
          <Input
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="doctor">Doctor</Label>
          <Select onValueChange={setDoctor}>
            <SelectTrigger>
              <SelectValue placeholder="Select a doctor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dr-smith">Dr. Smith</SelectItem>
              <SelectItem value="dr-johnson">Dr. Johnson</SelectItem>
              <SelectItem value="dr-williams">Dr. Williams</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit">Schedule Appointment</Button>
      </form>
    </div>
  );
}