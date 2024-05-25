import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../components/ui/card"
  import { Input } from "../../components/ui/input"
  import { Label } from "../../components/ui/label"
  import {Button} from "../../components/ui/button"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../components/ui/select"

export default function diagonises() {
    <div className="w-full h-screen flex justify-center items-center p-8">
      <Card className="w-screen max-w-4xl">
        <CardHeader>
          <CardTitle>Predict Disease</CardTitle>
          <CardDescription>Enter your symptoms to predict the disease.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" placeholder="Your Age" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="gender">Gender</Label>
                <Select>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="symptom1">Symptom 1</Label>
                <Input id="symptom1" placeholder="Describe your first symptom" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="symptom2">Symptom 2</Label>
                <Input id="symptom2" placeholder="Describe your second symptom" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="symptom3">Symptom 3</Label>
                <Input id="symptom3" placeholder="Describe your third symptom" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="duration">Duration of Symptoms</Label>
                <Input id="duration" type="number" placeholder="Duration in days" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="severity">Severity</Label>
                <Select>
                  <SelectTrigger id="severity">
                    <SelectValue placeholder="Select Severity" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="mild">Mild</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="severe">Severe</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Predict</Button>
        </CardFooter>
      </Card>
    </div>
}