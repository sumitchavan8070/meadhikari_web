const ReturnAndRefundPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-6">
          Return and Refund Policy for Meadhikari
        </h1>
        <p className="text-sm text-gray-500">
          Effective Date: <strong>06 Nov 2024</strong>
        </p>

        <p className="mt-6">
          At <strong>Meadhikari</strong>, we strive to provide you with the best
          experience while using our app for accessing previous year question
          papers and test preparation materials. However, if you are not
          satisfied with your purchase or encounter any issues, we offer a
          straightforward return and refund process. Please read this policy
          carefully to understand your rights and responsibilities.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8">
          1. Eligibility for Refunds
        </h2>
        <p className="mt-4">
          Refunds are applicable under the following circumstances:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-3">
          <li>
            <strong>Technical Issues:</strong> If you are unable to access the
            purchased content due to a technical fault on our end, and the issue
            cannot be resolved within a reasonable time.
          </li>
          <li>
            <strong>Duplicate Payment:</strong> If you have been charged
            multiple times for the same transaction due to a processing error.
          </li>
          <li>
            <strong>Unauthorized Purchase:</strong> If a purchase was made
            without your consent or due to fraudulent activity.
          </li>
        </ul>
        <p className="mt-4">
          Refunds are <strong>not</strong> applicable if:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-3">
          <li>You change your mind after purchasing the content.</li>
          <li>
            You fail to meet the technical requirements to access the app (e.g.,
            incompatible device or software).
          </li>
          <li>You violate our Terms and Conditions or misuse the app.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8">
          2. How to Request a Refund
        </h2>
        <p className="mt-4">To request a refund, please follow these steps:</p>
        <ol className="list-decimal list-inside mt-4 space-y-3">
          <li>
            Contact our support team at{" "}
            <a
              href="mailto:contact@meadhikari.com"
              className="text-blue-600 underline"
            >
              contact@meadhikari.com
            </a>{" "}
            within <strong>7 days</strong> of the purchase date.
          </li>
          <li>
            Provide your transaction details, including the order ID, date of
            purchase, and a description of the issue.
          </li>
          <li>
            Our team will review your request and respond within{" "}
            <strong>3-5 business days</strong>.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8">
          3. Refund Processing
        </h2>
        <p className="mt-4">If your refund request is approved:</p>
        <ul className="list-disc list-inside mt-4 space-y-3">
          <li>
            The refund will be processed within{" "}
            <strong>7-10 business days</strong>.
          </li>
          <li>
            The refund will be credited to the original payment method used
            during the purchase.
          </li>
          <li>
            You will receive a confirmation email once the refund has been
            processed.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8">
          4. Non-Refundable Items
        </h2>
        <p className="mt-4">The following items are non-refundable:</p>
        <ul className="list-disc list-inside mt-4 space-y-3">
          <li>Partially used or accessed content.</li>
          <li>Subscription fees after the subscription period has started.</li>
          <li>
            Any promotional or discounted purchases, unless otherwise stated.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8">
          5. Cancellation Policy
        </h2>
        <p className="mt-4">
          You may cancel a subscription or purchase before the content is
          accessed or downloaded. Once the content is accessed, cancellations
          are not permitted, and refunds will not be issued.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8">
          6. Contact Us
        </h2>
        <p className="mt-4">
          If you have any questions or concerns about our Return and Refund
          Policy, please contact us at:
        </p>
        <p className="mt-4">
          Email:{" "}
          <a
            href="mailto:contact@meadhikari.com"
            className="text-blue-600 underline"
          >
            contact@meadhikari.com
          </a>
        </p>

        <p className="mt-6 text-center text-gray-600">
          Thank you for choosing <strong>Meadhikari</strong>. We are committed
          to ensuring your satisfaction!
        </p>
      </div>
    </div>
  );
};

export default ReturnAndRefundPolicy;
