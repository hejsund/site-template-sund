
import { AirtableSync } from '@/components/AirtableSync';
import { FooterSection } from '@/components/FooterSection';

const AirtableSyncPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-display">
              Airtable Integration
            </h1>
            <p className="text-lg text-green-700 max-w-2xl mx-auto font-text">
              Sync your lead data from Supabase to Airtable with one click.
            </p>
          </div>
          
          <AirtableSync />
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default AirtableSyncPage;
