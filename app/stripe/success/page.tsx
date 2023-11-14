import { Button } from '@/components/ui/button';
import { CheckCheck } from 'lucide-react';
import Link from 'next/link';

function StripeSuccess() {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="text-base font-semibold text-center capitalize md:text-2xl">
            payment successful
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for purchase. We hope you enjoy it.
          </p>
          <p className="">Have great day!</p>

          <Button asChild className="mt-5">
            <Link href="/">Go Back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StripeSuccess;
