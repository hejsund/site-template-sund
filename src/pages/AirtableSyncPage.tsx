
import { AirtableSync } from '@/components/AirtableSync';
import { AirtableSyncTest } from '@/components/AirtableSyncTest';
import { FooterSection } from '@/components/FooterSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
              Sync your lead data from Supabase to Airtable and test the functionality.
            </p>
          </div>
          
          <Tabs defaultValue="management" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="management">Sync Management</TabsTrigger>
              <TabsTrigger value="testing">Test Sync</TabsTrigger>
            </TabsList>
            
            <TabsContent value="management">
              <AirtableSync />
            </TabsContent>
            
            <TabsContent value="testing">
              <AirtableSyncTest />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default AirtableSyncPage;
