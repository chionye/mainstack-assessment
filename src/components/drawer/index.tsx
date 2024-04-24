import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '../ui/sheet';
type drawerProps = {
    children: React.ReactNode;
    button: React.ReactNode;
    title: string;
}

const Drawer = ({ button, title, children }: drawerProps) => {
  return (
    <Sheet>
      <SheetTrigger>{button}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <h3>{title}</h3>
          </SheetTitle>
          <SheetDescription className='h-full'>{children}</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;